import { plainToClass } from "class-transformer";
import { ClassType } from "class-transformer/ClassTransformer";
import { injectable } from "inversify";

export function mapper<T, D>(dto: ClassType<T>, data: D) {
  return plainToClass(dto, data, { excludeExtraneousValues: true });
}
