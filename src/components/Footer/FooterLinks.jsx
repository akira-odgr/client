import PropTypes from "prop-types";

export const FooterLinks = ({ links }) => {
    return (
        <>
            {links.map((data) => {
                return (
                    <>
                        <li
                            key={data.name}
                            className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]"
                        >
                            <a href="">{data.name}</a>
                        </li>
                    </>
                );
            })}
        </>
    );
};

// プロパティの型を定義
FooterLinks.propTypes = {
    links: PropTypes.array.isRequired, // linksは必須の配列
};
