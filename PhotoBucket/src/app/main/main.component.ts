import { Component, OnInit } from '@angular/core';
import { PostService } from "../services/post.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private postService: PostService) { 

  }

  ngOnInit() {}

}
