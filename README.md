# Running the app
[Launch](https://xaliphostes.github.io/course-stress-inv-1/)

<br><br>

# Stress inversion using some functions
- No OOP
- Only ~100 lines of code
- Uses joints and stylolites

# Introduction


***Write a code which allows you to perform tectonic stress inversion using fracture data such as joints and stylolites.***

Even if the idea seems to be apparently `complicated`, it is not!


<br>
This course will learn you several concepts and potential related problems. Its main goal is not to show you how to perform stress inversion, but rather why using an `old school` programming paradigm, it is hard to extend such a code without modifying the main procedure and therefore by introducing potential bugs.

This course is based on `procedural programming` (excerpt from WikiPedia):
```text
Procedural programming is a programming paradigm, derived from imperative programming, based on the concept of the procedure call. Procedures (a type of routine or subroutine) simply contain a series of computational steps to be carried out. Any given procedure might be called at any point during a program's execution, including by other procedures or itself. The first major procedural programming languages appeared circa 1957–1964, including Fortran, ALGOL, COBOL, PL/I and BASIC.Pascal and C were published circa 1970–1972.
```

Even if we are going to use the notion of `types`, you will see that we are stuck in calls of `functions` without the possibility to extend the code with no modification (which is `not a so good idea` when writting a numerical code).

# Programming language
Among the multiple programming languages, our choice could have been either `Python` (very popular and simple) or `JavaScript` (the language of teh web). But we choose the `TypeScript` language, a superset of `JavaScript`. According to Wikipedia:
```text
TypeScript is a free and open source high-level programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.

TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno). Multiple options are available for transpilation. The default TypeScript Compiler can be used,or the Babel compiler can be invoked to convert TypeScript to JavaScript.

TypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. There are third-party header files for popular libraries such as jQuery, MongoDB, and D3.js. TypeScript headers for the Node.js library modules are also available, allowing development of Node.js programs within TypeScript.

The TypeScript compiler is itself written in TypeScript and compiled to JavaScript. It is licensed under the Apache License 2.0. Anders Hejlsberg, lead architect of C# and creator of Delphi and Turbo Pascal, has worked on the development of TypeScript.
```

# Programming paradigm
## Imperative
The programmer instructs the machine how to change its state
### Procedural
Procedures (a type of routine or subroutine) simply contain a series of computational steps to be carried out. Any given procedure might be called at any point during a program's execution, including by other procedures or itself. Examples are Fortran, ALGOL, COBOL, BASIC, Pascal and C
### Object oriented
Based on the concept of "objects", which can contain data and code. Notions of inheritance, polymorphism, encapsulation are introduced. Examples are Java, Python, C++, C#...
Some have been extended with some OO features: JavaScriptVB, Matlab, Fortran 2003
## Declarative
### Functional
### Reactive

# Software Architecture

# Design pattern
A design pattern is the re-usable form of a solution to a design problem. In software engineering, a [software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern) is a general, reusable solution to a commonly occurring problem within a given context in software design. They are classified in categories such as [creational](https://en.wikipedia.org/wiki/Creational_pattern), [structural](https://en.wikipedia.org/wiki/Structural_pattern), [Behavioral](https://en.wikipedia.org/wiki/Behavioral_pattern) or [Concurrency](https://en.wikipedia.org/wiki/Concurrency_pattern). Examples of design patterns that can be used in our project are:
- [Factory method](https://en.wikipedia.org/wiki/Factory_method_pattern): see a relative complexe example [here](https://replit.com/@xaliphostes/Cpp-Factory)
- [Singleton](https://en.wikipedia.org/wiki/Singleton_pattern): see an example [here](https://replit.com/@xaliphostes/Singleton-typescript#index.ts)
- [Thread pool](https://en.wikipedia.org/wiki/Thread_pool_pattern)
- [Visitor](https://en.wikipedia.org/wiki/Visitor_pattern): see an example [here](https://replit.com/@xaliphostes/visitor-pattern#index.ts)
- [Iterator](https://en.wikipedia.org/wiki/Iterator_pattern)

# Testing

# Stress inversion
Stress inversion is a numerical technique to inverse for the far field stress given some observations such as teh striation on fault planes, fractures around active faults, deformation (GPS, Insar), focal mechanisms...

The history of stress inversion can be decomosed into three parts:
- Approach 1: Anderson's inversions for tectonic stress regimes
- Approach 2: inversions with earthquake data and based of the hypothesis of Wallace and Bott. Methodologies are then derived from Carey and Brunier, 1974; Etchecopar et al., 1981; Angelier et al., 1982;
Angelier, 1984; Michael, 1987; Reches, 1987; Gephart, 1990; Cornet,
1993; Fry, 1999; Shan et al., 2006; Célérier et al., 2012...
- Approach 3: mechanical inversions. See, e.g., Maerten, F., 2010; Kaven et al., 2011; Maerten et al., 2016(a); Maerten et al., 2016(b)...

This history is summarized in
```text
Maerten, F., Madden, E.H., Pollard, D.D. and Maerten, L., 2016. Incorporating fault mechanics into inversions of aftershock data for the regional remote stress, with application to the 1992 Landers, California earthquake. Tectonophysics, 674, pp.52-64.
```

We are going to implement a 2D version of a stress inversion technique, and the program will be organized as follow:
1. Define a cost function for any data, that is to say, define a mathematical function which estimate the fit of a data (for example, given by a normal of a joint) to the current stress state by mean of the principal directions.
2. Define a way of finding the best solution of the stress state using the cost function(s).
3. Display the solution
4. Optionally, compute the `domain` of the model

## Cost function

## Inversion and display the solution

## Model domain

