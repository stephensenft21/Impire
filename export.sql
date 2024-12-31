-- Export Merch Table to CSV
COPY merch TO '<PATH>/merch.csv' CSV HEADER;

-- Export Training Table to CSV
COPY training TO '<PATH>/training.csv' CSV HEADER;

-- Export Feedback Table to CSV
COPY feedback TO '<PATH>/feedback.csv' CSV HEADER;
