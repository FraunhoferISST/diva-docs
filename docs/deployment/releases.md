---
id: releases
title: Releases and Migrations
---

# Releases and Migrations

We are continuously working on new features, catching bugs and improving our architecture.
To get the latest changes to you faster, our pipeline produces releases quite often.
You can always find the latest version on [GitHub](https://github.com/FraunhoferISST/diva/releases).
On this page we provide all the necessary knowledge you need to always keep DIVA up to date.

We recommend that you always use the latest stable version of DIVA.
The latest version of the source code can always be found in the [main](https://github.com/FraunhoferISST/diva/tree/main) branch.
The latest unstable development state can be found in [dev](https://github.com/FraunhoferISST/diva/tree/dev) branch.

In most cases you can safely use the newer patch or minor version of DIVA.
However, it is possible that we may change the internal infrastructure or add new features.
Then the existing data in your DIVA instance should also be brought up to date.
Most migrations are **mandatory**.

The update of the major version indicates a breaking change and the migration is necessary to guarantee the operability of the system.

[Releases](https://github.com/FraunhoferISST/diva/releases) | [Changelog](https://github.com/FraunhoferISST/diva/blob/main/CHANGELOG.md) | [Migration tool](https://github.com/FraunhoferISST/diva/tree/main/migration)

| Release                                                         | Migration         |
|-----------------------------------------------------------------|-------------------|
| [<Badge type="tip" text="v3.3.1" vertical="middle" />](#v3-3-1) | ✅️ Not required   |
| [<Badge type="tip" text="v3.3.0" vertical="middle" />](#v3-3-0) | 🆘 Mandatory      |
| [<Badge type="tip" text="v3.2.0" vertical="middle" />](#v3-2-0) | ✅️ Not required   |
| [<Badge type="tip" text="v3.1.0" vertical="middle" />](#v3-1-0) | ⚠️ Recommended    |
| [<Badge type="tip" text="v3.0.3" vertical="middle" />](#v3-0-3) | ✅️ Not required   |
| [<Badge type="tip" text="v3.0.2" vertical="middle" />](#v3-0-2) | ✅️ Not required   |
| [<Badge type="tip" text="v3.0.1" vertical="middle" />](#v3-0-1) | ✅️ Not required   |
| [<Badge type="tip" text="v3.0.0" vertical="middle" />](#v3-0-0) | ❕   Not available |

## Upgrade to the latest version

To bring DIVA up to date, simply download the latest Docker distribution `docker-deployment.zip` from the [release page](https://github.com/FraunhoferISST/diva/releases).
In both cases navigate to `docker/` directory to execute the start script:

```bash
./up_core.sh
```

## Migration execution

To prepare for the migration, deploy the target DIVA version and then execute the migration, if available.
Make sure your DIVA instance is not actively used in a production environment until the migration is completed to avoid potential inconsistencies.

We ship DIVA with a migration Docker service that you can also find in the `docker/` directory.
This service is attached to two specific versions, for which the migration is intended.
Since not all releases need a migration, you may not find a migration service for a particular version.
If you want to upgrade from an older version, you must run all intermediate migrations sequentially.
For example, to upgrade from `v3.0.3` to `3.2.0`, you have to deploy `3.2.0` and execute the migration for `3.1.0`.

Execute the migration service with the following:

```sh
./migrate.sh
```

::: warning
Make a snapshot of your DIVA environment. It should be ok to save the volumes.
:::

::: warning
After a successful execution, the service should not be executed again, as this may cause undesired side effects.
:::

## Releases

### `v3.3.1`

No migration from previous version required

### `v3.3.0`

A **mandatory** migration is available for DIVA **3.3.0**.
We provide a migration service to upgrade DIVA **3.2.0** to **3.3.0**.

Affected Components:

+ JSON Schema: `licenses` now is an object with more fields. Therefore we need to migrate the `licenses` field in our `documentstore` MongoDB and Elasticsearch.

### `v3.2.0`

No migration from previous version required

### `v3.1.0`

The **recommended** migration is available for DIVA **3.1.0**.
You can use the migration service to upgrade from DIVA **>=3.0.0**.

Affected Components:

- **DIVA Lake Adapter (DLA)** - create dedicated MongoDB database, create `id` to uploaded file `hash` mapping.
  Required for new Resources delete functionality

- **DCS Adapter (DA)** - create dedicated MongoDB database, migrate MongoDB old `dsc` collection to new database and
  creat `id` to `offer` mapping for all on DSC offered resources. Required for new Resources delete functionality

### `v3.0.3`

No migration from previous version required

### `v3.0.2`

No migration from previous version required

### `v3.0.1`

No migration from previous version required

### `v3.0.0`

No migration service available. Manual migration required
