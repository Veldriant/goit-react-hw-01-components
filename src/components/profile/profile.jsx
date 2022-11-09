import css from './profile.module.css'
import user from './user.json'
export const Profile = () =>{
    return (
        <div className={css.profile}>
            <div className={css.description}>
                 <img
                    src={user.avatar} width="50"
                    alt="User avatar"
                    className={css.avatar}
                 />
                <p className={css.username}>{user.username}</p>
                <p className={css.tag}>@{user.tag}</p>
                <p className={css.location}>{user.location}</p>
            </div>

            <ul className={css.stats}>
                <li>
                <span className={css.label}>{user.stats.folowers}</span>
                <span className={css.quantity}>{user.stats.folowersNumber}</span>
                </li>
                <li>
                <span className={css.label}>{user.stats.views}</span>
                <span className={css.quantity}>{user.stats.viewsNumber}</span>
                </li>
                <li>
                <span className={css.label}>{user.stats.likes}</span>
                <span className={css.quantity}>{user.stats.likesNumber}</span>
                </li>
            </ul>
        </div>
    );
}
