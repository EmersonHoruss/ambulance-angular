import { BaseRepository } from '../domain/base.repository';

export class BaseApplication<
  Entity,
  Repository extends BaseRepository<Entity>
> {
  constructor(private readonly repository: Repository) {}
  insert(entity: Entity) {
    this.repository.insert(entity);
  }

  list() {
    this.repository.list();
  }

  listOne(id: number) {
    this.repository.listOne(id);
  }

  update(id: number, entity: Entity) {
    this.repository.update(id, entity);
  }

  delete(id: number) {
    this.repository.delete(id);
  }

  page(page: number) {
    this.repository.page(page);
  }
}
