export class PersonAsker {
  constructor(
    public readLineFn: Function,
    public name?: string,
    public country?: string
  ) { }

  async ask(): Promise<void> {
    this.name = await this.readLineFn("What is your name?");
    this.country = await this.readLineFn("Where do you come from?");
  }

  getInfo(): string {
    return `${this.name} is from ${this.country}`;
  }
}
