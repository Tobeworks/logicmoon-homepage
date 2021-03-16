#!/bin/bash
rsync -a --exclude '.git' * ../httpdocs/;
exit 0;