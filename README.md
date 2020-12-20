# Cyberguard Website
Based on Hugo and the Meghna Theme

## Setup

### Source code
Clone the code and initialise git flow
* Create a directory called `cyberguard` to and `cd` into it
* `git clone git@github.com:cyberguardsec/website.git`
* `cd website`
* `git flow init`
* `git pull --ff-only`
* `git submodule update --init --recursive`

### Install the build tools
#### Linux
* Check is snap is installed: `snap version`
* Install snap if required: `sudo apt install snapd`
* `snap install hugo --channel=extended`
#### Windows
Open shell as admin and install Chocolatey and then Hugo
* `@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"`
* `choco install hugo-extended -confirm`

### Development and local testing
* `cd cyberguard/website`
* `hugo server -D`
