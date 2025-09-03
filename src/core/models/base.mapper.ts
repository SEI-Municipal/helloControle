export abstract class BaseMapper<E, M> {
  /**
   * Converte de Model (DTO, ViewModel etc.) para Entity (persistência).
   */
  abstract toEntity(model: Partial<M>): E;

  /**
   * Converte de Entity (banco) para Model (DTO, ViewModel etc.).
   */
  abstract toModel(entity: E): Partial<M>;
}
