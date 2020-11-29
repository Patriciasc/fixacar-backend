# fixacar-backend

This is the API used for fixacar:
Your App to Select your Workshop

# Version
Current version: 1.0

# User stories

We differentiate between registered and unregistered users.

Characteristics of a user account:
- Users can signup.
- Users can login.

Unregistered users can:
- Search for workshops by work/vehicle type.
- Get a list of workshops.
- Sort workshop's list by general satisfaction or price
- See detailed information of a selected workshop.

Registered users can:
- Give feedback/rating of a workshop.
- Request a budget to a certain workshop.
- Check and manage budgets: accept, reject, pending.
- Check and modify his/her profile.

# DB Schemas

## User

KEY        | TYPE                   | REFERENCE     | REQUIRED | VALIDATIONS              |
-----------|------------------------|---------------|----------|--------------------------|
name       | String                 |               | yes      |                          |
email      | String                 |               | yes      | RegExp                   |
password   | String                 |               | yes      |                          |
telephone  | String                 |               | no       |                          |
profile_url| String                 |               | no       | default:*                |
created_at | Date                   |               |          |                          |

## Workshop

KEY        | TYPE                   | REFERENCE     | REQUIRED | VALIDATIONS              |
-----------|------------------------|---------------|----------|--------------------------|
ratings    | [ObjectId]             |  Rating       | no       |                          |
name       | String                 |               | yes      |                          |
address    | String                 |               | yes      |                          |
schedule   | String                 |               | yes      |                          |
telephone  | String                 |               | yes      |                          |
service_mechanic| Boolean                |               | yes      |                          |
service_bp| Boolean                |               | yes      |                          |
service_electricity| Boolean                |               | yes      |                          |
vehicle_car    | Boolean                 |               | yes      |                          |
vehicle_moto   | Boolean                 |               | yes      |                          |  
image_url  | String                 |               | yes      |                          |
pt_general | Number                 |               | no       |                          |
pt_price   | Number                 |               | no       |                          |
pt_quality | Number                 |               | no       |                          |
created_at | Date                   |               |          |                          |

## Rating

KEY        | TYPE                   | REFERENCE     | REQUIRED | VALIDATIONS              |
-----------|------------------------|---------------|----------|--------------------------|
user       | ObjectId               |  User         | no       |                          |
pt_general | Number                 |               | yes      |                          |
pt_price   | Number                 |               | yes      |                          |
pt_quality | Number                 |               | yes      |                          |
comment    | String                 |               | no       |                          |
created_at | Date                   |               |          |                          |

## Budget

KEY        | TYPE                   | REFERENCE     | REQUIRED | VALIDATIONS              |
-----------|------------------------|---------------|----------|--------------------------|
user       | ObjectId               |  User         | no       |                          |
workshop   | ObjectId               |  Workshop     | yes      |                          |
link       | String                 |               | no       |                          |
status     | String                 |               | no       | enum: ['accept', 'reject', 'pending']|
price      | Number                 |               | no       |                          |
created_at | Date                   |               |          |                          |

# API ROUTES
Please note that all routes in this API should be called with the `/api` prefix before the endpoint, for example:
```
POST http://localhost:3000/api/auth/signup
```

## AUTHENTICATION ENDPOINTS

token required: NO
METHOD | URL                | What does it do
-------|--------------------|---------------------------------
POST   | 'auth/signup'      | Create a new account
POST   | 'auth/login'       | Authenticates a user

## USERS ENDPOINTS

METHOD | URL                  | AUTH | What does it do
-------|----------------------|------|---------------------------
GET    | '/me'                | YES  | Get a User
PUT    | '/me'                | YES  | Update User
DELETE | '/me'                | YES  | Delete User

## WORKSHOP ENDPOINTS

METHOD | URL              | AUTH | What does it do
-------|------------------|------|---------------------------
GET    | '/workshops'     | NO   | Get all Workshops
GET    | '/workshops/:id' | NO   | Get a Workshop
GET    | '/workshops/:id/ratings'| NO   | Get all Ratings of a certain Workshop
POST   | '/workshops/:id/ratings' | YES   | Add a Rating to a certain Workshop

## BUDGET ENDPOINTS

METHOD | URL                  | AUTH | What does it do
-------|----------------------|------|---------------------------
GET    | '/budgets/'          | YES  | Get User's requested budgets
PUT    | '/budgets/:budget_id'       | YES  | Update User's requested budgets
POST   | '/budgets/:workshop_id' | YES   | Create a Budget for a certain Workshop

## fixacar frontend
https://github.com/rtoledocastellano/fixacar-frontend

Demo:
![fixacar](https://user-images.githubusercontent.com/304927/100553232-a594db00-3284-11eb-9676-2eb989d5422f.gif)
