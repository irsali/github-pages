import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { FileListService } from './file-list.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SearchTableSettings, TableSettings, Utility, IrsHttpService } from '@app/shared';
import { environment } from '@env/environment';
import { merge, of } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { OrderBy, Query } from 'ngx-odata-v4';
import { ODataQueryResult } from '@odata/ODataQueryResult';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: []
})
export class FileListComponent implements OnInit {

  searchTableSettings: SearchTableSettings;

  dataSource = new MatTableDataSource();
  isLoadingResults: boolean;
  isRateLimitReached = false;
  refresh = new EventEmitter();
  isActionsVisible: boolean;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(private service: FileListService, private http: IrsHttpService) { }

  ngOnInit() {

    const rowActions = [];
    this.searchTableSettings = new TableSettings({
      columns: [
        { Name: 'id', Text: 'Id' },
        { Name: 'node_id', Text: 'Node Id' },
        { Name: 'full_name', Text: 'Full Name' },
        { Name: 'private', Text: 'Private' }
      ],
      filterQuery: '',
      expandQuery: '',
      canGoToView: false,
      canGoToEdit: false,
      canGoToRemove: false,
    });

    this.initTable();
    // this.refresh.emit();
  }

  initTable() {

    // this.service.getFilelist().subscribe((x: any) => {
    //   console.log(x);
    //   this.dataSource.data = x;
    // });
    this.sort.direction =
      this.searchTableSettings.defaultSortDirection === 'desc' ? 'desc' : 'asc';

    merge(this.sort.sortChange, this.refresh)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          // return this.service.getPage(this.paginator.pageIndex + 1, this.paginator.pageSize, 'firstName', this.sort.direction);
          // this.sort.active, this.sort.direction, this.paginator.pageIndex);
          // return this.service.Query().OrderBy('Name').Skip(this.paginator.pageIndex).Top(this.paginator.pageSize).Exec();
          const orderBy =
            this.sort.direction === 'desc' ? OrderBy.Desc : OrderBy.Asc;

          const searchQuery = this.searchTableSettings.searchWord
            ? Utility.replaceAll(
              this.searchTableSettings.searchQuery,
              '@searchWord',
              this.searchTableSettings.searchWord
            )
            : '';

          // const query = Query.create()
          //   .orderBy(this.sort.active, orderBy)
          //   .skip(this.paginator.pageIndex)
          //   .top(this.paginator.pageSize)
          //   .count(true);

          // return this.http.getOdata(
          //   `${this.searchTableSettings.oDataPath}?${query.compile()}&${
          //   this.searchTableSettings.filterQuery
          //   }&${searchQuery}&${this.searchTableSettings.expandQuery}`
          // );
          return this.service.getFilelist();
        }),
        map((data: any) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return of([]);
        })
      )
      // .subscribe((odataResult: ODataQueryResult<any>) => {
      //   this.paginator.length = odataResult['@odata.count'];
      //   this.dataSource.data = odataResult.value;
      // });
      .subscribe((httpResponse: HttpResponse<any>) => {
        // this.paginator.length = odataResult['@odata.count'];
        this.dataSource.data = httpResponse.body;
      });

  }

  getText(row: any, propertyName: string) {
    const propertyNames = propertyName.split('.');

    let value = row;

    propertyNames.forEach(item => {
      value = value[item];
    });

    return value;
  }

  getColumns() {
    return this.searchTableSettings.columns.map(x => x.Name);
  }

}
