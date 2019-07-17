export class TableSettings {
  oDataPath: string;
  columns: Array<Column>;
  searchQuery?: string;
  filterQuery?: string;
  expandQuery?: string;
  idColumnName = 'Id';
  defaultSortDirection = 'desc';
  defaultSortColumnName: string;
  defaultPageSize = 10;

  // inbuilt actions with inbuild routes provide rowActions for custom actions
  canGoToView = false;
  canGoToEdit = false;
  canGoToRemove = false;
  rowActions?: Array<RowAction>;

  constructor(init?: Partial<TableSettings>) {
    Object.assign(this, init);
  }
}

export class SearchTableSettings extends TableSettings {
  searchWord?: string;

  constructor(init?: Partial<SearchTableSettings>) {
    super();
    Object.assign(this, init);
  }
}

export class Column {
  Name: string;
  Text?: string;
}

export class RowAction {
  actionName: string;
  icon: string;
  disabled?: boolean;
  isHide?: boolean;
  callback?: (arg?: any) => any;
}
