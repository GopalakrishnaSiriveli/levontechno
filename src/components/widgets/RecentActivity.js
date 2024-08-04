import React from 'react';
import '../../styles/widgets/RecentActivity.css';

const RecentActivity = () => {
    return (
        <div className="recent-activity-widget">
            <h3>Recent Activity</h3>
            <ul>
                <li>Levon started following you</li>
                <li>Levon commented on your post</li>
                <li>Levon liked your photo</li>
                <li>Levon shared your post</li>
                {/* Add more activities */}
            </ul>
        </div>
    );
};

export default RecentActivity;