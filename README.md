# Clean Code

```quote
The strength and weakness of JavaScript is that it allows you to do anything, for better or worse.
```

### 1. Technical Debt

When you need to change a software or a system, you need to pay a price. This price is called technical debt. The more you change, the more you pay. The more you pay, the more you change. It's a vicious circle. The technical debt is divided into 4 concepts:

1. **Cost Understand**: You need to understand the code that you want to refactor.
2. **Cost Change**: It takes a long time to change the code.
3. **Cost Test**: Doing tests is not an easy tasks and it requires time.
4. **Cost Deploy**: You have to make sure that the deploy was successful so it requires time.

##### Refactoring
If you want to refactor something you have to create **automatic tests or integration tests** before all. Because the tests will indicate you if the refactor is correct or not.

##### Documentation
When you write code it is necessary to specify what a function does what a component renders, etc. This will allow you to understand the code in the future.
