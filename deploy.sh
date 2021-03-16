#!/bin/bash
rsync -a --exclude '.git' * ../tmp/;
exit 0;