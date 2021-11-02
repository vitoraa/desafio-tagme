import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity({ name: 'image' })
export class Image {
  @ObjectIdColumn()
  id: number;

  @Column({ type: 'string' })
  small: string;

  @Column({ type: 'string' })
  normal: string;
}