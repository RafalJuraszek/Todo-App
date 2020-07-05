export class TodoModel {
  constructor( public title: string, public description: string, public deadline: number, public priority: string, public finished: boolean, public toDoId: number) {
  }
}
