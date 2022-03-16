import { Component, OnInit } from '@angular/core';
import { PlannerTask } from 'src/app/shared/models/planner-task.model';

enum FilterType {
  Pending = 0,
  Done = 1,
  All = 2
}

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  plannerTasks: PlannerTask[] = [
    {
      description: 'Buy potatoes',
      done: false
    },
    {
      description: 'Feed the cat',
      done: false
    }
  ];
  taskInputValue = '';
  pendingTaskCount = 0;
  visibleTasks?: PlannerTask[];
  filterType = FilterType;
  selectedFilterType = FilterType.All;

  ngOnInit(): void {
    this.setVisibleTasks();
    this.setPendingTaskCount();
  }

  addTask(): void {
    const trimmedValue = this.taskInputValue.trim();

    if (trimmedValue) {
      const newTask = { description: trimmedValue, done: false }
      this.plannerTasks.push(newTask);
      this.taskInputValue = '';
      this.setPendingTaskCount();
    }
  }

  deleteTask(index: number): void {
    this.plannerTasks = this.plannerTasks.filter((task, i) => i !== index);
    this.setPendingTaskCount();
  }

  setPendingTaskCount(): void {
    this.pendingTaskCount = this.plannerTasks.filter(task => !task.done).length;
    this.setVisibleTasks();
  }

  clearAllTasks(): void {
    this.plannerTasks = [];
    this.setPendingTaskCount();
  }

  setVisibleTasks(): void {
    if(this.selectedFilterType === FilterType.Pending) {
      this.visibleTasks = this.plannerTasks.filter(task => !task.done);
    }else if (this.selectedFilterType === FilterType.Done) {
      this.visibleTasks = this.plannerTasks.filter(task => task.done);
    }else {
      this.visibleTasks = [...this.plannerTasks];
    }
  }

  setSelectedFilterType(type: FilterType): void {
    this.selectedFilterType = type;
    this.setVisibleTasks();
  }
}
