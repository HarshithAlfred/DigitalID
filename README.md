This guide will help users set up your React app and manage their Git workflow.

# SJCIT React App Setup Guide

This guide provides step-by-step instructions for setting up and running the SJCIT React app, as well as managing your Git workflow.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (includes npm)
- [Git](https://git-scm.com/downloads)

## Step 1: Clone the Repository

First, clone the repository to your local machine. Open your terminal and run:

```bash
git clone https://github.com/HarshithAlfred/DigitalID.git
```


## Step 2: Navigate to the Project Directory

Change to the project directory using the `cd` command:

```bash
cd DigitalID 
```

## Step 3: Install Dependencies

Install the necessary npm packages to run the React app:

```bash
npm install
```

This command will read the `package.json` file and install all required dependencies.

## Step 4: Start the React App

After the dependencies have been installed, you can start the development server:

ask me for .env before starting

```bash
npm run dev
```

This will launch the app in your default web browser. The development server usually runs at `http://localhost:5173`.

## Git Workflow

### Pushing Code Changes

When you make changes to the code and want to push them to the remote repository, follow these steps:

1. **Check the Status**: Check which files have been modified:

    ```bash
    git status
    ```

2. **Stage Your Changes**: Stage the files you want to commit:

    ```bash
    git add <filename>
    ```

    To stage all changed files, use:

    ```bash
    git add .
    ```

3. **Commit Your Changes**: Commit your staged changes with a descriptive message:

    ```bash
    git commit -m "Your descriptive commit message here"
    ```

4. **Push to the Remote Repository**: Finally, push your changes:

    ```bash
    git push origin main
    ```

    Replace `main` with your branch name if necessary.

### Pulling Updates from Upstream

To keep your local repository updated with the latest changes from the remote repository, regularly pull updates:

1. **Fetch the Latest Changes**: First, fetch the changes:

    ```bash
    git fetch upstream
    ```

2. **Merge Changes**: Merge the changes into your local branch:

    ```bash
    git merge origin/main
    ```

    Again, replace `main` with your branch name if necessary.


