async function fetchOrderHistory() {
    try {
        // בקשת GET ל-API שמחזיר את היסטוריית ההזמנות
        const response = await fetch('http://localhost:3004/orders'); // שנה לכתובת ה-API שלך
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // המרת התגובה ל-JSON
        const orders = await response.json();
        // הצגת ההזמנות בדף
        displayOrders(orders);
    } catch (error) {
        console.error('Error fetching order history:', error);
        // הצגת הודעה במקרה של שגיאה
        document.getElementById('order-history-body').innerHTML = '<tr><td colspan="3">Failed to load order history.</td></tr>';
    }
}

function displayOrders(orders) {
    const tableBody = document.getElementById('order-history-body');
    tableBody.innerHTML = ''; // ניקוי התוכן הקיים

    // לולאת forEach להוספת שורות חדשות לכל הזמנה
    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${new Date(order.date).toLocaleDateString()}</td>
            <td>${order.total}</td>
        `;
        tableBody.appendChild(row);
    });
}

// קריאה לפונקציה להטענת היסטוריית ההזמנות כאשר הדף נטען
fetchOrderHistory();
