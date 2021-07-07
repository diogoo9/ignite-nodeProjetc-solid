import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid4 } from "uuid";
import { Category } from "./Category";
import { Specifiation } from "./Specification";

@Entity("cars")
class Car {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  daily_rate: number;

  @Column({ default: true })
  available: boolean;

  @Column()
  license_plate: string;

  @Column()
  fine_amount: number;

  @Column()
  brand: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @ManyToMany(() => Specifiation)
  @JoinTable({
    name: "specifications_cars",
    joinColumns: [{ name: "id" }],
    inverseJoinColumns: [{ name: "car_id" }],
  })
  specifitaions: Specifiation[];

  @Column()
  category_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuid4();
    }
  }
}

export { Car };
