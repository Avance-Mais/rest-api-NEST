import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from 'src/Dto/post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  verificarPosts() {
    return this.postService.obterPosts();
  }

  @Post()
  criar(@Body() data: PostDto) {
    return this.postService.criarPost(data);
  }
}
