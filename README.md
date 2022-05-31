

## Cyber Defence

## `Clone the repo`

First, clone this repository and run the development server:

```bash
$ git clone git@github.com:ishan-im/Cyber-defence.git
npm install
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## `Push to a new repo`

Git push to a new repository:

```bash
$ git init
git add -A
git commit -m <commit message>
git remote add origin git@github.com:ishan-im/Cyber-defence.git
git push -u -f origin master
```


## `Push to existing repo`

Git push to existing repository:

```bash
$ git remote set-url origin git@github.com:ishan-im/Cyber-defence.git
git add  -A
git commit -m <commit message>
git push -f origin main
```

## `Change reflect in local repo`

Git change in remote repo reflect in local repo:


```bash
$ git checkout main
git pull -s recursive -X theirs
git reset --hard origin/main
git pull origin main
```

## `Learn More`

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.



## `Live Deployment`
<a href="http://cyber-defence-2.vercel.app/" target="_blank">Live Here</a>

