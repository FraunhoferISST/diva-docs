---
id: airflow
title: Airflow
---

Airflow is our workflow engine that performs automated analyses and standard tasks in the background.
As an administrator you can view the GUI of Airflow. How to reach the GUI depends on the deployment.
With Docker, the default is port 9090.
You can log in to Airflow with the Airflow Admin Credentials.
Credentials can be set during deployment.

![DIVA Airflow Profiling](/diva_4.0.0/screenshots/airflow_login.png)

One can view all workflow runs in an overview.

![DIVA Airflow Profiling](/diva_4.0.0/screenshots/airflow_dag_overview.png)

In the detailed view you can see which tasks were successfully or incorrectly processed.

![DIVA Airflow Profiling](/diva_4.0.0/screenshots/airflow_dag_details.png)
