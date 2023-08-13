import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('item')
export class ItemController {
  @Get()
  findAll(@Res() res: Response) {
    try {
      return res.status(HttpStatus.OK).json([]);
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: e.getMessage(),
      });
    }
  }
}
