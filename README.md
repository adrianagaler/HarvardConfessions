### Only frontend deployed for reference at this [link] (https://harvard-confessions.herokuapp.com/)  (after log in and sign up pages, it does not work without the backed):

# Bootcamp Project API

## Set up

```bash
createdb bootcampproject
npm run copy-env
```

In a separate terminal, run

```bash
npm run db
confessions=# \i config/script.sql
```

## Run

```bash
npm run start s
```

## Make migration

```bash
npx knex migrate:make <MIGRATION_NAME>
```

## Seed with mock data

```bash
npx knex seed:run
```

## Walkthrough

### Stage 1

Create Knex tables and Objection.js models for users, posts, and hobbies. See below for the required fields:

All fields

- id
- createdAt
- updatedAt

Users:

- name
- email
- password
- birthday
- concentration
- hometown
- house
- gender
- bio
- picture (in URL form)

Posts:

- content
- userId

Hobbies:

- hobby (one of 'SPORTS', 'ARTS', 'MUSIC', 'READING', 'TRAVEL', 'DINING', 'CODING')
- userId

1.  Made the tables using Knex migrations

    - run `npx knex migrate:make <MIGRATION_NAME>` to make a migration file
    - new file is in the `/db/migrations/` directory
    - in that migration, filled in the information needed for that table.

2.  Made the Objection.js models for users, posts, and hobbies in the `/src/models/` directory.
    - A skeleton of the `User` model
    - implemented methods which get the table name corresponding to the Knex tables made in Step 1
    - Determined the proper relations between different models and made another method to add the relation
    - For the following relation, I needed a different type of relation than the other two, and this relation required creating a new 'join table' through knex.

### Stage 2

Complete functions which take advantage of Objection.js functionality to query for various kinds of data.

Implemented the functions marked as TODO in `/src/graphql/types/user`, `/src/graphql/types/post`, and `src/graphql/mutations/Post` as per the specifications given therein.

Refer to the Knex documentation and lecture code for syntactical clarifications: https://knexjs.org/
