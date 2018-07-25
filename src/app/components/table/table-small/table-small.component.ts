import { Component, OnInit, ViewChild, Output, EventEmitter   } from '@angular/core';
import { MatTableDataSource                                   } from '@angular/material';

import { TableComponent                                       } from '../table.component';
import { FieldMapper } from '../../../model/field-mapper';

@Component({
  selector: 'app-table-small',
  templateUrl: './table-small.component.html',
  styleUrls: ['./table-small.component.scss']
})
export class TableSmallComponent extends TableComponent {
  public mapperObject = null;
  public mapper: FieldMapper = new FieldMapper();

  @Output() onRemove = new EventEmitter();

  checkData() {
    if (!this.data) {
      this.data = new MatTableDataSource([]);
    }
    this.setDataTableProperties();
    if (this.entity) {
      this.entityInstance = Object.create(this.entity.prototype);
      this.entityInstance.constructor.apply(this.entityInstance);
      this.mapperObject = this.mapperService.findMapperObject(this.entity);
      this.properties = Object.getOwnPropertyNames(this.entityInstance.getMapper(this.entityInstance));
      this.propertiesTypes = this.entityInstance.getTypeProperties(this.entityInstance);
      this.propertiesActions = new Array();
      this.properties.forEach(element => {
        this.propertiesActions.push(element);
      });
      this.propertiesActions.push("actions");
    }
    this.oldEntity = this.entity;
  }

  //remove the object from data
  remove(objectRemove):any {
    this.onRemove.emit(objectRemove);
  }
}