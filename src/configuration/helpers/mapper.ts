import { plainToClass } from "class-transformer";
import { ClassType } from "class-transformer/ClassTransformer";

export function mapper<T, D>(dto: ClassType<T>, data: D) {
  return plainToClass(dto, data, { excludeExtraneousValues: true });
}
