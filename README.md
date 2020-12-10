# Heavily inspired by Bob Martin's clean architecture book

I am starting to get bored and irritated by my MVC like architectures for a REST API. So instead of sticking to it I've decided to do a study on different architectures and over engineer it as much as possible so that I can use this knowledge for future projects. Please do not take this project all too serious, and if you have any thoughts feel free to let me know.

---

## Todos / Notes

- [x] Figure out how to map DTOs (autoMappers)
- [x] Inject Mocked Database
- [x] Implement Custom Errors / Exceptions (includes a wrapper)
- [x] Add Logger
- [x] Difference between exception and error?
- [x] Set proper type on database return (managed to do it, but its not dev friendly)
- [x] throw exceptions in domain
- [x] createdAt/updatedAt fields for entities
- [x] Write tests
- [x] Fix Path Aliases
- [x] Fix Knexfile
- [x] Add a token/auth service
- [x] Revisit Database adapter (Where does the interface belong?)
- [x] Revisit entire folder structure, compare with others.
- [ ] Write tests for @application
- [ ] implement the token/auth service so that we can login
- [ ] Add Register and Logout usecase
- [ ] Add auth middleware
- [ ] Add Post entity
- [ ] Basic Crud
- [ ] Add Like UseCase
- [ ] How do domain entities work with a database? (can we automate it?)
- [ ] Make sure everything is tested
- [ ] Does the auth service belong in application? or should it only have the interface
- [ ] Be able to build for production
- [ ] nested folders within presentation should get it's own package.json. (remove modules in root package.json that aint needed)
