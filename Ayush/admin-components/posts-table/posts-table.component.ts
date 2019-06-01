import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';



export interface UserData {
  postID: string,
  expTime: number
}

const users: UserData[] = [
  { postID: "kskn78829349sndsf", expTime: 24 },
  { postID: "kskn7sasad8829349sndsf", expTime: 27 },
  { postID: "kskn788asd29349sndsf", expTime: 22 },
  { postID: "kskn788asd29349sndsf", expTime: 2 },
  { postID: "kskn78829349sndsf", expTime: 14 },
  { postID: "ksaskn788xzc29349sndsf", expTime: 224 },
  { postID: "kskn78829349sndsasf", expTime: 274 },
  { postID: "kscxzckn78829349sndsf", expTime: 24 },
  { postID: "kskasdan7882vxcv9349sndsf", expTime: 16 },
  { postID: "kskn7asd8829349sndsf", expTime: 1 },
  { postID: "ksknasdasd78829349sndsf", expTime: 8 },
  { postID: "kskn7882934zxczxc9sndsf", expTime: 14 },
  { postID: "ksknasasd78829349sndsf", expTime: 16 },
  { postID: "kskn78sadasd829349sndsf", expTime: 24 },
  { postID: "kskn7882asdas9349sndsf", expTime: 24 },

];

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})

export class PostsTableComponent {

  displayedColumns = ['postID', 'expTime'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(users);
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
