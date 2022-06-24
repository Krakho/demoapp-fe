import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SubsectionModel } from 'src/app/subsection/subsection.response';
import { Router } from '@angular/router';
import { PostService } from 'src/app/shared/post.service';
import { SubsectionService } from 'src/app/subsection/subsection.service';
import { CreatePostPayload } from './create-post.payload';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { PostModel } from 'src/app/shared/post-model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup | any;
  postPayload: CreatePostPayload;
  subsections: Observable<PostModel[]> | any;

  constructor(private router: Router, private postService: PostService,
    private subsectionService: SubsectionService) {
    this.postPayload = {
      postName: '',
      url: '',
      description: '',
      subsectionName: ''
    }
  }

  ngOnInit() {
    this.createPostForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      subsectionName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    this.subsectionService.getAllSubsections().subscribe((data) => {
      this.subsections = data;
    }, error => {
      throwError(error);
    });
  }

  createPost() {
    this.postPayload.postName = this.createPostForm.get('postName').value;
    this.postPayload.subsectionName = this.createPostForm.get('subsectionName').value;
    this.postPayload.url = this.createPostForm.get('url').value;
    this.postPayload.description = this.createPostForm.get('description').value;

    this.postService.createPost(this.postPayload).subscribe((data) => {
      this.router.navigateByUrl('/');
    }, error => {
      throwError(error);
    })
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }

}