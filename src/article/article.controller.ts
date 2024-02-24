import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ArticleService } from './article.service';
import { AuthGuard } from '@app/user/guards/auth.guard';
import { User } from '@app/user/decorators/user.decorator';
import { UserEntity } from '@app/user/user.entity';
import { CreateArticleDto } from '@app/article/dto/CreateArticleDto';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @UseGuards(AuthGuard)
  @Post()
  async create(@User() currentUser: UserEntity, @Body('article') createArticleDto:CreateArticleDto ): Promise<any> {
    return this.articleService.createArticle(currentUser, createArticleDto);
  }
}
