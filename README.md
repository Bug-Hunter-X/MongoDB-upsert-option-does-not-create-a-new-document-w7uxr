# MongoDB upsert option does not create a new document

This repository contains a code example demonstrating a common error when using the upsert option with MongoDB.  The issue arises when trying to insert a new document if one doesn't already exist. 

The provided code intends to update a document if it exists or create one if it doesn't. However, if the query doesn't match any existing documents, `updateOne` with `upsert: true` will still update, resulting in an empty document with the updated field. To resolve this, use `insertOne` if the document doesn't exist and `updateOne` if it does.