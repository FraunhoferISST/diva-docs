---
id: about-diva
title: About
---

DIVA stands for Data Inventory and Valuation Approach and is a project for managing data in companies,
developed for evaluating the newest data management technologies in context of data transparency, data insight and data networking.

This is an ongoing project of the [Data Business](https://www.isst.fraunhofer.de/en/business-units/data-business.html) unit of the [Fraunhofer ISST](https://www.isst.fraunhofer.de/en.html).
Data is getting more and more important to companies.
By utilizing the right data, companies can get more productive and will be able to succeed their competitors.
Thus, we believe it is time for a data management solution, that evaluates new innovative solutions to support companies in their daily work with data.
This tool will grow day by day and we try our best to tackle data management challenges in companies.

We also use this tool as a playground for our students, where they can work out topics for their bachelor, master or doctoral thesis.

## Main Features

+ 🏛️ Microservice Architecture: allows to choose the best technology for solving a problem and a more easy scaling

+ 🕸️ Data Network: navigate through your data network and discover new data

+ 🕵️ Policy System: RESTful policy system that allows changes during runtime

+ 🤖 Business Rule System: RESTful rule system that allows to trigger additional actions on events

+ 🔠 Flexible Field System: RESTful schema system that allows adding new custom fields at runtime

+ 💻 Client Application: an easy to use web application for managing all kinds of data management related topics

+ 🐳 Container Ready: all microservices and core components are docker ready so you can start them right out of the box

## Core Concepts and terminology

DIVA is built with flexibility and extensibility in mind. We are aware of the dynamics, dimensions and complexity of data management in an organization.
Our goal is to build a framework for all your data that simply solves all management problems, fully automated.

To realize this vision, we define a concept of resources. A resource in DIVA is an abstraction for a relevant information source.
This can be a PDF file, a database, an image or anything else, with important metadata around it.
The resources can be grouped into further abstraction - an asset. An asset helps you to better organize the resource.

Automated profiling provides the resources in DIVA with further interesting analysis and metadata.
Profiling enriches the data with valuable additional attributes and brings out the hidden potential of the data.

### Resource

A resource is a representation of any data source that has value to you.
As a resource in DIVA you can import any kind of information sources such as files, databases, other data platforms, API services, etc.
By definition, a resource has no restrictions to represent any type of data.
All you need to do - provide information on how DIVA can get your data.

Profiling can be performed on resources to enrich them with metadata.
If required, the metadata such as description, title or keywords can be adjusted manually.

### Asset

Multiple resources can be logically grouped into one asset. An asset can have resources of different types.
Metadata for an asset can be managed as well.

### Service

DIVA can inventory existing services from your enterprise.
One can enrich these with metadata and then link them to the data that it consumes or produces.

### User

A user is you. Users can register in the web application to get full access to DIVA functionalities.

### Profiling

Under profiling we understand the automatic extraction or generation of useful metadata which enriches a resource.
Profiling is performed by a small service through the access to the actual data behind a resource.
Examples of profiling are the extraction of keywords from a PDF file or the generation of a caption for an image.

### Data Network

Data does not stand alone.
They often live in a context.
DIVA allows you to visualize this context.
The user can navigate through the data network to find more interesting data and contexts.
