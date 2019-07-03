import Heapify from './heapify';

export interface IJob {
  priority?: number;
  title: string;
  params?: any;
}

export default class PriorityQueue extends Heapify {
  protected capacity: number = 20;

  public isEmpty(): boolean {
    return this.heapBox.length < 1;
  }

  public enqueue(priority: number, job: IJob): number|boolean {
    if (this.size === this.capacity) {
      return false;
    }
    return this.insert(priority, job);
  }

  public dequeue(): IJob {
    return this.poll();
  }

  public count(): number {
    return this.heapBox.length;
  }

  public clear(): void {
    this.heapBox = [];
    this.size = 0;
  }
}
