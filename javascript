 <!-- Tumblr Stats --->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            fetch('WEB_APP')
            .then(response => response.json())
            .then(data => {
                document.getElementById('postCount').textContent = data.postCount;
                document.getElementById('followerCount').textContent = data.followerCount;
                document.getElementById('followingCount').textContent = data.followingCount;
            })
            .catch(error => console.error('Error fetching data:', error));
});
    </script>
