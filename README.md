# Vehicle Service System

This is a full-stack web application for a vehicle service system developed using Django and React.js. The application allows users to register components with their repair pricing or new purchase, add repair vehicles, add issues for vehicles, calculate the final price, and display graphs for daily, monthly, and yearly revenue.

Below is the screenshot for the project:
![image](https://github.com/user-attachments/assets/d96d6b73-c1b6-4e51-a052-62febfd74244)

## Features

1. Operations user can register components with their repair pricing, or new purchase.
2. Repair vehicles can be added.
3. Issues for the vehicles can be added. Users can choose between new components or repair.
4. Final price calculation and paying the required amount (no real-world transactions).
5. Graphs for daily, monthly, and yearly revenue (using [Recharts](https://recharts.org/en-US/)).
6. Bonus: Unit tests for the backend.

## Tech Stack

- Backend: Django, Django REST Framework
- Frontend: React.js, Recharts
- Database: PostgreSQL

## Setup and Installation

### Prerequisites

- Python 3.10+
- Node.js 16+
- PostgreSQL
- npm or yarn

### Backend Setup (Django)

1. **Clone the repository**:
    ```sh
    git clone https://github.com/sudhanshu7352/vehicle_service_django_react.git
    cd vehicle_service_django_react
    ```

2. **Create a virtual environment**:
    ```sh
    python -m venv venv
    source venv/bin/activate   # On Windows: venv\Scripts\activate
    ```

3. **Install backend dependencies**:
    ```sh
    pip install -r requirements.txt
    ```

4. **Configure PostgreSQL**:
    Create a PostgreSQL database and user. Update `DATABASES` in `vehicle_service/settings.py` with your database credentials.

    ```python
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'vehicle_service_db',
            'USER': 'vehicle_service_user',
            'PASSWORD': 'your_password',
            'HOST': 'localhost',
            'PORT': '5432',
        }
    }
    ```

5. **Apply migrations**:
    ```sh
    python manage.py makemigrations
    python manage.py migrate
    ```

6. **Create a superuser**:
    ```sh
    python manage.py createsuperuser
    ```

7. **Load sample data** (optional):
    ```sh
    python manage.py loaddata sample_data.json
    ```

8. **Run the backend server**:
    ```sh
    python manage.py runserver
    ```

### Frontend Setup (React)

1. **Navigate to the frontend directory**:
    ```sh
    cd frontend
    ```

2. **Install frontend dependencies**:
    ```sh
    npm install
    # or
    yarn install
    ```

3. **Start the frontend development server**:
    ```sh
    npm start
    # or
    yarn start
    ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to view the frontend.
- Use the Django admin interface at `http://localhost:8000/admin` to manage the backend.

## Project Structure

```plaintext
vehicle_service_django_react/
├── backend/
│   ├── api/
│   │   ├── migrations/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── vehicle_service/
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── manage.py
│   ├── requirements.txt
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── reportWebVitals.js
│   │   ├── setupTests.js
│   ├── package.json
│   ├── yarn.lock
├── .gitignore
├── README.md
