import { Module } from '@nestjs/common';
import { dataProviders } from './data-source.provider';
import { ORM } from './orm.provider';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [ORM],
    providers: [...dataProviders],
    exports: [...dataProviders, TypeOrmModule],
})
export class PersistenceModule { }