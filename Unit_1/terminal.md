# The Terminal

The Terminal is how we interact with our computer and it's directories(folders) and files.

It is a CLI: Command Line Interface, a text based interface to the computer.

WE can type commands, manipulate files, execute programs, or open documents. More powerful and fast than a GUI(Graphical User Interface).

GUI is a Graphical User Interface that uses icons, menus, and windows for us to interact with in a visual way.)

<hr />

## Terminal Commands

- Print Working Directory
    - `pwd`
    - shows the name of the current directory, prints the full directory file path.
- List Directory
    - `ls`
    - Show the content of the current directory, shows all the folders and/or files at the currents directory path.
- Make Directory
    - `mkdir`
    - creates a new directory inside the current one, aka makes a new folder.
- Touch or New Item
    -`touch fileName.fileType`
    -`ni fileName.fileType`
    - creates a new file at the current directory path.
- Change Directory

    - `cd`
    - moves into a different directory.
    -to move forward: `cd fileOrFolderName`
    -to move backwards: `cd ..`
- Clear

    -`Clear` or `cls`
    - clears the terminal

<hr />

## Other Terminal Commands:

- Copy File
    - `cp`
    - copies a file, ex: `cp index.html copyIndex.html` 
- Move File
    - `mv`
    - moves a file, ex: `mv index.html ./newFolderPath`
- Help
    - `help`
    - provides a list of commands and/or opens a help menu
- Remove Here
    - `rm -r` or `rmdir`
    - removes files/folders, warnings: THESE CANNOT BE RECOVERED! Files are permanently deleted and not sent to recycle bin. 
    - `rm-r` removes a directory's contents (all/any folders and file it contains), `rmdir` removes an empty directory/folder

<hr />

### Other Things To Note:

- In the terminal a file path divides parent and child folder and files with a forward slash: /

- ex: desktop/PTSB_Jan_2023/Lecture/Unit_1/Terminal.md

    - desktop 
        - PTSB_Jan_2023
            - Lecture
                - Unit_1
                    - terminal.md
- Using the tab key can help us finish a folder or file name we are typing out.

- We do need to type file/folder names exactly how they are stored.

- How to Stop the terminal from running (certain software or programs):
    - Use `ctrl+c` or `cmd+c` and enter/return.
    - kind of like a kill switch.
    - stops the terminal from running something and/or exits what's running/a menu, appears in the terminal as `^C`
- On Mac `Sudo` may need to be used before commands where we need to elevate from user to admin privileges. 
    - a password field will appear and your computer password needs to be entered.




