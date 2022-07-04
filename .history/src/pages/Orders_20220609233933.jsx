import React from 'react';
import { GridComponent, ColumnDirective, ColumnsDirective, Resize, Sort,ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid} from '../data/dummy';
import { Header } from '../components'

const Orders = () => {
  return (
    <div>
      <Header ctegory="Page" title="Orders"/>
    </div>
  )
}

export default Orders