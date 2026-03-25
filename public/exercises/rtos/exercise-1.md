# Exercise 1: Understanding Task Scheduling

## Objective
Learn the fundamentals of task scheduling in a real-time operating system.

## Background
Task scheduling is the core mechanism that allows an RTOS to manage multiple tasks and ensure that time-critical tasks execute within their deadlines. Different scheduling algorithms provide different guarantees.

## Tasks

1. **Study Scheduling Algorithms**
   - Read about Rate Monotonic Scheduling (RMS)
   - Understand priority-based preemptive scheduling
   - Learn about context switching

2. **Create a Simple Task Simulator**
   ```cpp
   #include <iostream>
   #include <vector>
   using namespace std;

   struct Task {
       int id;
       int priority;
       int period;     // in milliseconds
       int execution;  // in milliseconds
   };

   class Scheduler {
   private:
       vector<Task> tasks;
   public:
       void addTask(Task t) { tasks.push_back(t); }
       
       void schedule() {
           // Sort tasks by priority
           sort(tasks.begin(), tasks.end(), 
               [](Task &a, Task &b) { return a.priority > b.priority; });
       }
   };
   ```

3. **Analyze Task Feasibility**
   - Check if tasks can meet their deadlines
   - Calculate CPU utilization

## Deliverables
- Task scheduler implementation
- Test cases with different task sets
- Analysis of schedulability for each test case

## Hints
- CPU Utilization = Sum(execution_time / period) for all tasks
- RMS states that if utilization ≤ ln(2) ≈ 0.69, tasks are guaranteed to meet deadlines
- Remember that context switching has overhead
