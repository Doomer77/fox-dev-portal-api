import { Body, Controller, Get, Post } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagEntity } from '@app/tag/tag.entity';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  async findAll(): Promise<TagEntity[]> {
    return await this.tagService.findAll();
  }

  @Post('/tag')
  async createTag(@Body() tagEntity: TagEntity): Promise<TagEntity> {
    return await this.tagService.createTag(tagEntity);
  }
}
