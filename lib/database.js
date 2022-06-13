import db from './database/dbconnector';

export const getSortedDatabaseData = async (res) =>
{
    res = await db.select("*").from("Version");

    return res.sort((a,b) => {
        if(a.Ver < b.Ver)
        {
            return 1;
        } else {
            return -1;
        }
    });

}