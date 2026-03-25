# Exercise 2: Implementing a Simple RTOS

## Objective
Build a simplified RTOS that manages multiple concurrent tasks with deterministic scheduling.

## Background
A real-time operating system must guarantee that critical tasks execute within their time constraints. This exercise involves creating a basic multi-tasking system with task management and synchronization.

## Tasks

1. **Design the RTOS Architecture**
   - Task Control Block (TCB) structure
   - Ready queue and waiting queue
   - Context switching mechanism

2. **Implement Core Components**
   ```cpp
   class RTOS {
   private:
       queue<Task*> readyQueue;
       Task* currentTask;
       
   public:
       void createTask(void (*func)(), int priority) {
           // Create new task and add to ready queue
       }
       
       void yield() {
           // Save current task state
           // Switch to next ready task
       }
       
       void run() {
           // Main scheduler loop
           while (true) {
               // Execute current task
               // Check for preemption
           }
       }
   };
   ```

3. **Add Synchronization**
   - Implement a simple mutex
   - Test thread-safe operations
   - Verify no race conditions occur

## Deliverables
- Complete RTOS implementation
- Task creation and management
- Context switching mechanism
- Mutex/synchronization primitive
- Test program with multiple concurrent tasks

## Hints
- Use a priority queue for the ready queue
- Implement periodic timer interrupts for context switching
- Keep TCB overhead minimal
- Test with tasks of different priorities to verify preemption
