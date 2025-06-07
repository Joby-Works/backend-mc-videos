import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', nullable: true, default: null, })
    alias: string | null;

    @Column({ type: 'varchar', nullable: false })
    description: string;

    @Column({ type: 'simple-array', nullable: true, default: null })
    files: string[] | null;
}
