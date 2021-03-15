export interface Reader {
  read(filepath: string): Promise<string>
}

export enum FileExtensions {
  pdf = 'PDF',
}
