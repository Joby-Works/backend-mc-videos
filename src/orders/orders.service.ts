import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { REPOSITORY_TOKENS } from 'src/persistence/data-source.provider';

@Injectable()
export class OrdersService {

  constructor(
    @Inject(REPOSITORY_TOKENS[Order.name])
    private repository: Repository<Order>) {

  }
  async create(dto: CreateOrderDto) {
    const order = new Order();
    order.alias = dto.alias ?? null;
    order.description = dto.description;
    await this.repository.save(order);
    return order;
  }

  async findAll() {
    const orders = await this.repository.find();
    return orders;
  }

  async findOne(id: number) {
    const order = await this.repository.findOneBy({ id });
    return order;
  }

  async update(id: number, dto: UpdateOrderDto) {
    const order = await this.repository.findOneByOrFail({ id });
    order.alias = dto.alias ?? order.alias;
    order.description = dto.description ?? order.description;
    await this.repository.update({ id }, order);
    return order;
  }

  async remove(id: number) {
    await this.repository.delete({ id });
  }
}
