# Trillo

* As a user, I want to add new cards so I can track my to-do items.
* As a user, I want to see my existing cards when I revisit Trillo, so I can view my to-dos from anywhere.
* As a user, I want to be able to mark cards as completed so I can focus on my remaining items.
* As a user, I want to delete cards, so I can eliminate incriminating evidence.


## Deployment

Deploys to https://ga-wdidc5-trillo.herokuapp.com.

### Ontime-Setup:

1. Ask the owner (matt.scilipoti@ga.co) to add you as a collaborator.
2. Configure git:
```
git remote add https://git.heroku.com/ga-wdidc5-trillo.git
```

### Gotcha

Heroku expects the rails/rack app to be at the root of the git repo.  Since the rails dir is not at the root of the git repo, we must push a subtree to heroku using:
```
git subtree push --prefix trillo heroku master
```
