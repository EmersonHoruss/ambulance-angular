export interface BaseRepository<Entity> {
  insert(entity: Entity): any;

  list(): any;

  listOne(id: number): any;

  update(id: number, entity: Entity): any;

  delete(id: number): any;

  page(page: number): any;
}
