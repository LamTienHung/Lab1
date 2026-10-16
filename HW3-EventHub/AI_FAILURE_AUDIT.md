
# AI Failure Audit - HW3 Resilient Event Hub

## Introduction

This report documents issues identified while following
AI-assisted development instructions for HW3.

The purpose is to evaluate AI suggestions critically,
verify their correctness, and record improvements.

## Failure 1: Git Repository Initialization

### AI Suggestion
The AI suggested running `git add` and `git commit`
before confirming that the project folder was a Git repository.

### Failure
The terminal displayed:

fatal: not a git repository
(or any of the parent directories): .git

### Detection
The error occurred when executing the Git command
in the VS Code terminal.

### Correction
I initialized the local Git repository:

git init

Then I staged and committed the project files.

### Lesson Learned
AI-generated instructions may assume prerequisites
are already completed. Developers should verify
their environment before executing commands.

---


## Failure 2: Non-Deterministic Registration Testing

### AI Suggestion
The AI suggested using Math.random() to simulate
successful and failed registration requests.

### Failure
The test results were unpredictable, making it
difficult to reproduce the Success and Error states.

### Detection
I reviewed the simulateRegistration() function
and found that it depended on random outcomes.

### Correction
I added URL-based test modes:
- ?test=success
- ?test=error

These modes allow both outcomes to be tested reliably.

### Lesson Learned
Deterministic testing is important for verifying
application behavior and reproducing errors.


---


## Failure 3: Missing Input Length Validation

### AI Suggestion
The AI provided a registration form that checked
whether the full name and email were empty.

### Failure
The form did not enforce a maximum length
for the full name.

### Detection
I tested the form using a name containing
more than 100 characters.

### Correction
I added a validation rule that rejects
full names longer than 100 characters.

### Lesson Learned
AI-generated validation logic should be tested
with boundary values and unexpected inputs.
